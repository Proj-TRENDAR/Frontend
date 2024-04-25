import Dropdown, { DropdownItem } from '@components/common/Dropdown'
import { useState } from 'react'

export default function GuideDropdownForButton() {
  const [currentItemId, setCurrentItemId] = useState<string>()
  const itemList = [
    { id: 'item1', title: '아이템1' },
    { id: 'item2', title: '아이템2' },
    { id: 'item3', title: '아이템3' },
  ]
  return (
    <div style={{ zIndex: 2 }}>
      <Dropdown items={itemList} placeholder="선택해주세요" currentItemId={currentItemId} style={{ zIndex: 2 }}>
        {itemList.map(item => (
          <DropdownItem
            key={item.id}
            title={item.title}
            onClick={() => {
              setCurrentItemId(item.id)
            }}
            disabled={false}
          />
        ))}
      </Dropdown>
    </div>
  )
}
