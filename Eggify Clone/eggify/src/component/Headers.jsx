import "../style/header.css"
import {Switch, Avatar} from 'antd'
import {BellOutlined, UserOutlined, SearchOutlined} from '@ant-design/icons'
function Headers() {
    return (
        <>
            <header>
                <h1>Eggify</h1>
                <div className="search">
                    <div className="search-icon">
                        <SearchOutlined />
                    </div>
                    <input id="search-input" type="text" placeholder="Search for anything"  />
                </div>
                <div className="icons">
                    <Switch />
                    <BellOutlined />
                    <Avatar size={45} icon={<UserOutlined />}/>
                </div>
            </header>
        </>
    )
}

export default Headers