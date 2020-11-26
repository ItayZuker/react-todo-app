import './delete-todo-button.scss';

export function DeleteTodoButton(props) {

    return <button                          //
        className='delete-button'           //  ---> This activets delete function at
        onClick={() => {                    //       TodoItem component
            props.showTaDam(true);          //
        }}                                  //
    >x</button>
}