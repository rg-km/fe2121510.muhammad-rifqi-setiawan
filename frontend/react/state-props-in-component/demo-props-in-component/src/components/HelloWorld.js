const HelloWorld = ({data, title}) => {
    return (
      <div>
        {data} {title}
      </div>
    );
  };
   
  HelloWorld.defaultProps = {
    data: "Kosong",
    title: ""
  };

export default HelloWorld;