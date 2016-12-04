import React, {Component} from 'react';

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className='submit-button' type="submit"  value="Change Name"/>
          <label>
            <input className='input-nick' type="text" name="name" value={this.props.value} onChange={this.handleChange.bind(this)}
            placeholder={this.props.nickname}/>
          </label>
        </form>
      </div>
    );
  }

  handleChange(ev) {
   this.props.onChange(ev.target.value);
 }

  handleSubmit(ev) {
      this.props.onSubmit(this.props.value);
      ev.preventDefault();
  }
}
export default Menu;
