import { Component } from "react";
import { withRouter } from '../HOC/withRouter'
import { CharacterContext } from "../context/CharacterContext";
import { CharacterContextType } from "../types/charactersContext";
import { API_KEY } from '../api';
import axios from 'axios';
import { NavigateFunction } from 'react-router-dom'
import { Table } from "antd";
import { LeftSquareOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

type CharacterPropsType = {
    navigate: NavigateFunction;
    params: { [key: string]: string }
}
type CharacterStateType = {
    loading: boolean;
    data?: any,
    columns: any
}

class Info extends Component<CharacterPropsType, CharacterStateType>{
    static contextType?= CharacterContext;
    context!: CharacterContextType;

    state: CharacterStateType = {
        loading: false,
        data: [],
        columns: [
            {
                title: 'City',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'DATE',
                dataIndex: 'dt_txt',
                key: 'dt_txt',
            },
            {
                title: 'Clouds',
                dataIndex: ['clouds', 'all'],
                key: 'clouds',
            },
            {
                title: 'Visibility',
                dataIndex: 'visibility',
                key: 'visibility',
            },
            {
                title: 'Temp',
                dataIndex: ['main', 'temp'],
                key: 'temp',
            },
            {
                title: 'Temp_min',
                dataIndex: ['main', 'temp_min'],
                key: 'temp_min',
            },
            {
                title: 'Temp_max',
                dataIndex: ['main', 'temp_max'],
                key: 'temp_max',
            },
            {
                title: 'Pop',
                dataIndex: 'pop',
                key: 'pop',
            },
            {
                title: 'Rain',
                dataIndex: ['rain', '3h'],
                key: 'rain',
            },
            {
                title: 'Wind-speed',
                dataIndex: ['wind', 'speed'],
                key: 'speed',
            },
            {
                title: 'Wind-deg',
                dataIndex: ['wind', 'deg'],
                key: 'deg',
            },
            {
                title: 'Wind-gust',
                dataIndex: ['wind', 'gust'],
                key: 'gust',
            }
        ]
    }

    async getData(name: any) {
        this.setState({
            loading: true
        })
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${API_KEY}`)
        if (response.data) {
            this.setState({
                data: response.data.list.map((item: any, index: any) => {
                    return {
                        ...item,
                        name,
                        index
                    }
                })
            })
        }
        this.setState({
            loading: false
        })
    }
    async componentDidMount(): Promise<void> {
        const { selectedItem } = this.context;
        const prevContext = this.context;
        if (selectedItem) {
            await this.getData(this.props.params.name);
        }
        else {
            await this.getData(this.props.params.name);
        }
    }
    render() {
        if (!this.state.data) {
            return null;
        }
        const { } = this.state.data;
        return (
            <div>
                {<Table loading={this.state.loading} columns={this.state.columns} dataSource={this.state.data} rowKey='index' />}
                <Link to='/'><LeftSquareOutlined className="row" /></Link>
            </div>
        )
    }
}

export default withRouter(Info);