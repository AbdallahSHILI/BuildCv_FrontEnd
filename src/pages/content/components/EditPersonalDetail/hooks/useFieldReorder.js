import { useRef, useState } from "react";

// Encapsulates the drag-to-reorder behaviour for the core fields
// (email / phone / location). Returns the current order plus everything
// a row needs to participate in the drag: its ref setter, whether it's
// the one being dragged, the live offset, and the pointer handlers.
export default function useFieldReorder(initialOrder) {
  const [fieldOrder, setFieldOrder] = useState(initialOrder);
  // Key of the field currently being dragged (or null).
  const [draggingKey, setDraggingKey] = useState(null);
  // Live vertical offset (px) applied to the dragged row so it follows the pointer.
  const [dragOffsetY, setDragOffsetY] = useState(0);

  const itemRefs = useRef({}); // key -> row DOM node
  const dragInfoRef = useRef(null); // { startY, slots, startIndex, currentIndex }

  const swapOrder = (i, j) =>
    setFieldOrder((prev) => {
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  // Ref-callback factory so each row can register itself under its key.
  const setItemRef = (key) => (el) => {
    itemRefs.current[key] = el;
  };

  const handleDragPointerDown = (e, key) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    // Snapshot every row's current position before anything moves, so we
    // have fixed reference points ("slots") to compare against as the
    // pointer travels.
    const slots = fieldOrder.map((k) => {
      const rect = itemRefs.current[k].getBoundingClientRect();
      return { top: rect.top, centerY: rect.top + rect.height / 2 };
    });

    dragInfoRef.current = {
      startY: e.clientY,
      slots,
      startIndex: fieldOrder.indexOf(key),
      currentIndex: fieldOrder.indexOf(key),
    };
    setDraggingKey(key);
    setDragOffsetY(0);
  };

  const handleDragPointerMove = (e) => {
    const info = dragInfoRef.current;
    if (!info) return;

    const deltaY = e.clientY - info.startY;
    const { slots, startIndex } = info;
    let { currentIndex } = info;

    const draggedCenterNow = slots[startIndex].centerY + deltaY;

    // Loop (not just a single if/else-if) so a fast drag that crosses
    // more than one slot in a single pointermove still resolves correctly.
    while (
      currentIndex > 0 &&
      draggedCenterNow < slots[currentIndex - 1].centerY
    ) {
      swapOrder(currentIndex, currentIndex - 1);
      currentIndex -= 1;
    }
    while (
      currentIndex < slots.length - 1 &&
      draggedCenterNow > slots[currentIndex + 1].centerY
    ) {
      swapOrder(currentIndex, currentIndex + 1);
      currentIndex += 1;
    }

    info.currentIndex = currentIndex;

    // The dragged row now renders at slots[currentIndex] in the flow.
    // Subtract that shift so the transform keeps it anchored to the
    // pointer instead of being applied on top of the new flow position.
    setDragOffsetY(deltaY - (slots[currentIndex].top - slots[startIndex].top));
  };

  const handleDragPointerUp = () => {
    dragInfoRef.current = null;
    setDraggingKey(null);
    setDragOffsetY(0);
  };

  return {
    fieldOrder,
    draggingKey,
    dragOffsetY,
    setItemRef,
    handleDragPointerDown,
    handleDragPointerMove,
    handleDragPointerUp,
  };
}
