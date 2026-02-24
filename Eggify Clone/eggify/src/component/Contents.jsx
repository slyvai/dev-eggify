import { Row, Col, Checkbox } from 'antd'
import {LikeOutlined, FireOutlined, PlusOutlined, LeftOutlined, RightOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import ImageBurger from '../assets/burger.webp'
import ImageBread from '../assets/jam-bread.webp'
import ImageChicken from '../assets/chicken.webp'
import ImageSalad from '../assets/salad.webp'
import ImageMenu from '../assets/menu.webp'
import {Table, Tag} from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import '../style/content.css'

function Contents() {
    const date= dayjs().format('D ddd')
    const [shoppingList, setShoppingList] = useState([
        { key: '1', name: 'Eggs', quantity: '2 dozens', checked: false },
        { key: '2', name: 'Chicken breast', quantity: '1.5kg', checked: false },
        { key: '3', name: 'Cheese', quantity: '500gm', checked: false },
        { key: '4', name: 'Milk', quantity: '5ltr', checked: false },
        { key: '5', name: 'Chocolate', quantity: '2 pc', checked: false },
        { key: '6', name: 'Bread', quantity: '4pc', checked: false },
        { key: '7', name: 'Potatoes', quantity: '3kg', checked: false },
    ])

    const toggleCheck = (key) => {
        setShoppingList(prev =>
            prev.map(item =>
                item.key === key ? {...item, checked: !item.checked} : item
            )
        )
    }
        const dataFood = [
        {
            key: '1',
            name: 'Avocado toast',
            calories : '250cal',
            ingredients: 'Avocado, Bread, Eggs',
            time: '15min',
            tags:['in progress']
        },
        {
            key: '2',
            name: 'Alfredo Pasta',
            calories : '350cal',
            ingredients: 'Avocado, Bread, Eggs',
            time: '15min',
            tags:['to do']
        },
        {
            key: '3',
            name: 'Quinea Salad',
            calories : '450cal',
            ingredients: 'Avocado, Bread, Eggs',
            time: '15min',
            tags:['cancelled']
        },
        {
            key: '4',
            name: 'Grilled Chicken',
            calories : '250cal',
            ingredients: 'Avocado, Bread, Eggs',
            time: '15min',
            tags:['to do']
        },
    ]
    const column = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Calories',
            dataIndex: 'calories',
            key: 'calories',
        },
        {
            title: 'Ingredients',
            dataIndex: 'ingredients',
            key: 'ingredients',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'State',
            dataIndex: 'tags',
            key: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = 'default';
                        if(tag === 'in progress') {
                            color='green'
                        }
                        else if(tag === 'to do') {
                            color='blue'
                        }
                        else {
                            color='red'
                        }
                        return <Tag color={color} key={tag}>{tag}</Tag>
                    })}
                </>
            ),
        },
    ]
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('Selected:', selectedRowKeys, selectedRows);
        },
    }
    return (
        <Row className="content-container" gutter={[16, 16]} style={{ padding: '20px' }}>
            <Col span={18} >
                <Row gutter={[19, 19]}>
                    <Col span={24}>
                        <div className="hero-banner">
                            <div className="hero-text">
                                <div className="text-image">
                                    <div className="title">
                                        <h1>Elevate Your Culinary <br/> Experience With Eggify</h1>
                                        <p>Explore recipes, plan your week, and shop seamlessly. Elevate your dining experience effortlessly. <br/> from curated recipes to nutrition insights, we've cracked the code for a tasteful journey in every bite.</p>
                                    </div>
                                    <div className="image">
                                        <img src={ImageBurger}/>
                                    </div>
                                </div>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
                    <Col span={9}>
                        <div className="meal-today">
                            <div className="title">
                                <div className='date'>
                                    {date}
                                </div>
                            <p>Your Meal Today</p>
                            </div>
                            <div className="desc">
                                <ul>
                                    <li>Bread & Jam, Coffee</li>
                                    <li>Grilled Chicken, Salad</li>
                                    <li>Fruit tarts, Chococake chesse</li>
                                </ul>
                            </div>
                            <div className="bottom">
                                <div className="icon-1">
                                    <div className="like">
                                        <LikeOutlined/>
                                        <p>20</p>
                                    </div>
                                    <div className='calories'>
                                        <FireOutlined/>
                                        <p>11K</p>
                                    </div>
                                </div>
                                <div className='button'>
                                    <button>Details</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="red-bread">
                            <div className="text-image">
                                <div className="text">
                                    <p>Red Bread & Jam</p>
                                </div>
                                <div className="image">
                                    <img src={ImageBread}/>
                                </div>
                            </div>
                            <div className="bottom">
                                <div>
                                    <button>See recipe</button>
                                </div>
                                <div className="icon-1">
                                    <div className="like">
                                        <LikeOutlined/>
                                        <p>120</p>
                                    </div>
                                    <div className='calories'>
                                        <FireOutlined/>
                                        <p>250cal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="grilled-chicken">
                            <div className="text-image">
                                <div className="text">
                                    <p>Grilled Chicken</p>
                                </div>
                                <div className="image">
                                    <img src={ImageChicken}/>
                                </div>
                            </div>
                            <div className="bottom">
                                <div>
                                    <button>See recipe</button>
                                </div>
                                <div className="icon-1">
                                    <div className="like">
                                        <LikeOutlined/>
                                        <p>50</p>
                                    </div>
                                    <div className='calories'>
                                        <FireOutlined/>
                                        <p>350cal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="cashew-nut-salad">
                            <div className="text-image">
                                <div className="text">
                                    <p>Cashew Nut Salad</p>
                                </div>
                                <div className="image">
                                    <img src={ImageSalad}/>
                                </div>
                            </div>
                            <div className="bottom">
                                <div>
                                    <button>See recipe</button>
                                </div>
                                <div className="icon-1">
                                    <div className="like">
                                        <LikeOutlined/>
                                        <p>60</p>
                                    </div>
                                    <div className='calories'>
                                        <FireOutlined/>
                                        <p>150cal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
                    <Col span={14}>
                        <div className="upcoming-task">
                            <div className="title">
                                <div className="text">
                                    <p>Upcoming Task</p>
                                    <div className="add-button">
                                        <PlusOutlined/>
                                    </div>
                                </div>
                               <div className="all-task">
                                   <p>All Task</p> <RightOutlined/>
                               </div>
                            </div>
                            <Table
                                dataSource={dataFood}
                                columns={column}
                                pagination={false}
                                rowSelection={rowSelection}
                                size="small"
                            />
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className="sticky-note">
                            <div className="title">
                                <div className="text">
                                    <p>Sticky Note</p>
                                    <div className="add-button">
                                        <PlusOutlined/>
                                    </div>
                                </div>
                                <div className="navigation">
                                    <div className="prev">
                                        <LeftOutlined/>
                                    </div>
                                    <div className="next">
                                        <RightOutlined/>
                                    </div>
                                </div>
                            </div>
                            <div className="note-content">
                                <p>1. Try the new Mango Tango Smoothie recipe for a refreshing breakfast tomorrow!</p>
                            </div>
                            <div className="note-content">
                                <p>2. Incorporate at least one plant-based meal into dinner routines for a balanced diet.</p>
                            </div>
                            <div className="note-content">
                                <p>3. Sauté spinach with garlic for an extra burst of flavor in my favorite dishes.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col span={6}>
                <div className="shopping-list">
                    <div className="title">
                        <div className="text">
                            <div className="cart-icon">
                                <ShoppingCartOutlined/>
                            </div>
                            <p>Shopping List</p>
                        </div>
                        <div className="see-all">
                            <p>See All</p> <RightOutlined/>
                        </div>
                    </div>
                    <div className="shopping-items">
                        {shoppingList.map(item => (
                            <div className="shopping-item" key={item.key}>
                                <Checkbox
                                    checked={item.checked}
                                    onChange={() => toggleCheck(item.key)}
                                />
                                <div className="item-info">
                                    <div className="item-name">
                                    <p className={item.checked ? 'checked-item' : ''}>{item.name}</p>
                                    </div>
                                    <div className="item-quantity">
                                        <span>{item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="shop-now">Shop now</button>
                </div>
                <div className="offers" style={{ marginTop: '16px' }}>
                    <div className="title">
                        <div className="text">
                            <p>Offers for you</p>
                        </div>
                        <div className="desc">
                            <p>Personalized deals for you! Discover <br/> merchant discounts and culinary delight</p>
                        </div>
                    </div>
                    <div className="images">
                        <img src={ImageMenu}/>
                    </div>
                </div>
            </Col>

        </Row>
    )
}

export default Contents