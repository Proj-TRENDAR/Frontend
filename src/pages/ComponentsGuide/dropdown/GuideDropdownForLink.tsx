import Dropdown, { DropdownItem } from '@components/common/Dropdown'

export default function GuideDropdownForLink() {
  const itemList = [
    { id: 'item1', title: '메인으로', url: '/' },
    { id: 'item3', title: '로그인 페이지로', url: '/login' },
    { id: 'item2', title: '네이버', url: 'https://www.naver.com/' },
  ]
  return (
    <Dropdown items={itemList} placeholder="선택해주세요" currentItemId={''}>
      {itemList.map(item => (
        <DropdownItem key={item.id} title={item.title} url={item.url} disabled={false} />
      ))}
    </Dropdown>
  )
}
