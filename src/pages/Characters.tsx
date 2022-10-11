import { Component, ReactNode } from "react";
import { citys } from '../citys'
import { CharacterContext } from "../context/CharacterContext";
import { CharacterContextType } from "../types/charactersContext";
import { NavigateFunction } from 'react-router-dom'
import { withRouter } from '../HOC/withRouter'

type CharactersPropsType = {
    children?: ReactNode;
    navigate: NavigateFunction;
    params: { [key: string]: string }
}
type CharactersStateType = {
    data: any,
}
class Characters extends Component<CharactersPropsType, CharactersStateType>{
    static contextType?= CharacterContext;
    context!: CharacterContextType;

    constructor(props: CharactersPropsType) {
        super(props)
        this.state = {
            data: citys
        }
        this.onSelect = this.onSelect.bind(this)
        this.inputSearch = this.inputSearch.bind(this)
    }

    onSelect(event: any) {

        const name = event.target.dataset.name
        this.context.setSelectedItem(name)
        this.props.navigate(`/${name}`);
    }

    inputSearch(event: any) {
        console.log(event.target.value)
        this.setState({
            data: citys.filter((el) => { return el.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 })
        })
    }

    render() {
        return (
            <div className="container">
                <input placeholder="Enter" className="input" onChange={this.inputSearch} />
                <ul className="list" >
                    {this.state.data.map((el: any, index: any) => {
                        console.log()
                        return <li className="item" key={index} data-name={el} onClick={this.onSelect} >{el}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default withRouter(Characters);









// {
//     citys.map((el, index) => {
//         return <li className="item" key={index} data-name={el} onClick={this.onSelect}>{el}</li>
//     })
// }
