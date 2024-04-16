const Test = () => {


    ( async () => {
        const res = await fetch('/api',{
          method: 'GET',
        })

        console.log(JSON.stringify(res));
      })()

    return (
      <div>
      </div>
    );
}

export default Test;