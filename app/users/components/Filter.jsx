'use client'

const Filter = ({handleChange}) => {
    const handleInput = (e)=>{
        handleChange(e.target.value.toString().toLowerCase());
    }
  return (
    <input 
      type='text'
      onChange={handleInput}
      placeholder="search for user..."
      className="p-2 m-5 border-2 w-auto"
    />
  )
}

export default Filter