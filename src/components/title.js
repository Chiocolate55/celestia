const title = ({obj}) => {
  return (
    <div className="titleComponent">
      <img src={obj.icon} alt='' />
      <span> {obj.title}</span>
    </div>
  )
}

export default title