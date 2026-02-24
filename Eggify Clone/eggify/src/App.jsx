import Headers from './component/Headers.jsx'
import Contents from './component/Contents.jsx'
import './App.css'
import {Layout, Menu} from 'antd'
import {HomeOutlined, CalendarOutlined, SnippetsOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import { PiBowlFoodLight } from "react-icons/pi";
import { TbPaperBag } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
function App() {
const { Header, Content, Sider } = Layout

  return (
    <>
        <div>

            <Layout>
                <Sider width={100} style={{height: '100vh', background: '#DAEEED'}} className='menu-container'>
                    <div className='menu-1'>
                        <div className="logo"></div>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{height: '55vh'}}
                            items={[
                                {label: 'Home', key: '1', icon: <HomeOutlined />},
                                {label: 'Calendar', key: '2', icon: <CalendarOutlined />},
                                {label: 'Meals', key: '3', icon: <PiBowlFoodLight />},
                                {label: 'Recipes', key: '4', icon: <SnippetsOutlined />},
                                {label: 'Grocery', key: '5', icon: <TbPaperBag/>},
                                {label: 'Settings', key: '6', icon: <SettingOutlined />},
                                {label: 'Help', key: '7', icon: <RiCustomerServiceLine />}
                            ]}
                        ></Menu>
                    </div>
                    <Menu
                        mode="inline"
                        items={[
                            {label: 'Discord', key: '1', icon: <RiDiscordLine/>},
                            {label: 'Log out', key: '2', icon: <LogoutOutlined/>}
                        ]}
                    >
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{padding: 20, background: '#fff', marginLeft: 0}}>
                        <Headers />
                    </Header>
                    <Content>
                        <Contents />
                    </Content>
                </Layout>
            </Layout>

        </div>

    </>
  )
}

export default App
