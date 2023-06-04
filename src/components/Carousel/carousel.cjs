import  {Carousel}  from 'react-carousel-minimal';


function arrlen(arr)
{
  let i = 0;
  while(arr[i])
    i++;
  return i;
}

const  CarouselFun = (obj) => {

  function letData ()
  {

    let newData  = [] ;
    let len = arrlen(obj.images)

    for (let index = 0; index < len; index++) {
      newData[index] = {image: obj.images[index], nome: "sundacer"};
    }
    return newData;
  }

  const data = letData();
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="fun">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselFun;