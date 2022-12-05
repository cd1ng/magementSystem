import {
  BarChartOutlined,
  MessageOutlined,
  FormOutlined,
  UserOutlined,
  CreditCardOutlined,
  InfoOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  SettingOutlined,
  CheckSquareOutlined,
  AreaChartOutlined,
  ControlOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  TagOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
const iconMap = {
  '/home': <AreaChartOutlined />,
  '/project': <BarChartOutlined />,
  '/project/create': <CreditCardOutlined />,
  '/project/list': <InfoOutlined />,
  '/authority': <FormOutlined />,
  '/authority/authorityList': <OrderedListOutlined />,
  '/authority/userList': <ControlOutlined />,
  '/message': <MessageOutlined />,
  '/message/list': <SettingOutlined />,
  '/message/setting': <UnorderedListOutlined />,
  '/my': <UserOutlined />,
  '/my/myInformation': <SolutionOutlined />,
  '/my/toDoList': <CheckSquareOutlined />,
  '/department': <TeamOutlined />,
  '/department/information': <UsergroupAddOutlined />,
  '/department/weekReport': <TagOutlined />,
};

function changeStyle(obj) {
  return {
    id: obj.id,
    key: obj.key,
    parentId: obj.parentId,
    icon: iconMap[obj.key],
    label: obj.routerTitle,
  };
}

export default changeStyle;
