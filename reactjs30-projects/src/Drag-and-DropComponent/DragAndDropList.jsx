// src/DragAndDropList/DragAndDropList.jsx
import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './SortableItem'; // Import SortableItem component
import './DragAndDropList.css'; // Optional: Add styles

const initialItems = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
];

function DragAndDropList() {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul className="item-list">
          {items.map(({ id, content }) => (
            <SortableItem key={id} id={id} content={content} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

export default DragAndDropList;
