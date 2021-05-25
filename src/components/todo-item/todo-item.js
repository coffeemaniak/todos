import {React, Component} from "react";
import "./todo-item.scss";
import done from "./done.png";
import high from "./important.png";
import del from "./delete.png";
import {db} from "../service/firebase";


export default class TodoItem extends Component {
    render() {
        const {label, important, finishes} = this.props;
        let classes = "todo_item";
    if (important) {
        classes +=" item_important";
    } 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         important: false,
    //     };
    // }

    // componentDidMount() {
    //     db.collection("inProcess")
    //     .get()
    //     .then(snapshot => 
    //         snapshot.docs.map((doc => ({
    //             id: doc.id,
    //             ...doc.data()
    //         })))
    //     .then(data => this.setState({data: data}))
    // }


    // render() {
        // console.log(this.state);
        // const {label} = this.props;
        // // console.log(label);
        return (
            <>
            <li className={classes}>
            <span className="item_label">
                {label}
            </span>
            <div className="buttons_group">
                <button 
                type="button"
                className="button_important">
                    <img src={high} alt="important" width="35px" height="35px"/>
                </button>
                <button 
                type="button"
                className="button_arcieve">
                    <img src={done} alt="done" width="35px" height="35px"/>
                </button>
                <button 
                type="button"
                className="button_delete">
                    <img src={del} alt="delete" width="35px" height="35px"/>
                </button>
            </div>
            </li>
            </>
        )
    }
    }
// }

// const TodoItem = ({label, important = false}) => {
    
//     return (
//         <li>
//             <span>
//                 {label}
//             </span>
//             <div>
//                 <button 
//                 type="button"
//                 className="button_important">
//                     Important
//                 </button>
//                 <button 
//                 type="button"
//                 className="button_arcieve">
//                     Move to Archieve
//                 </button>
//             </div>
//         </li>
//     )
// }
