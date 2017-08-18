import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class Posts_new extends Component {

    renderField(field) {
        const {meta: {touched , error} } = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        // wire up JSX that we returning
        //field.input=> has all propertirs we pass like onChange , OnFocus, OnBlur etc
        //    {field.meta.touced ?  field.meta.error : ''} if field wasn't touch display errror // else dont 
        return(



            <div className={className} >
                <label htmlFor="input"> {field.lable} </label>
                <input className="form-control" {...field.input} type="text"
                />
                <div className="text-help" >
                {touched ?  error : ''}
                </div>
           </div>
        )

    }

    onSubmit(values){
        // this is component that why we add .bind(this)
        // console.log(values) => our object

    }

// component => return some JSX to show it on the screen 
  render() {
    // we difune out own onsubmit function on handlesubmit ! 
    const {handleSubmit} = this.props
    return (
           
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field 
               lable = "Title"
               name ="title"
               component={this.renderField}
               /> 

               <Field 
               lable = "Categories"
               name ="categories"
               component={this.renderField}
               /> 

               <Field 
               lable = "Post Content"
               name ="content"
               component={this.renderField}
               />
        <button type="submit" className="btn btn-primary"> Submit </button>

</form>  
    )
  }


}

function validate(values) {
// will be called  automaticly whenever user tries to submit the form
// {title: 'awdawd' categories:'awdadwa' content:"awdwad"}
// console.log(values)
const errors = {};
// Validate the inouts from values

// let {title='' ,categories='' , content='' } = values;
    if(!values.title){
        errors.title = "Enter Title"
    }
    if(!values.categories){
        errors.categories = "Enter categories"
    }
    if(!values.content){
        errors.content = "Enter content"
    }

// if errors is empty the forn is fine to submit
//if errors has any props - > form is invalid
return errors;
}
//config redux form
// name of the forn 'PostsNewForm'

export default reduxForm({
    // validate will be always called on subnittion of the form
    validate,
    form:'PostsNewForm'
}) (Posts_new);

// PostEdit.js 