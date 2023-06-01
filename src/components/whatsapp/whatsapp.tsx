/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

const  Whatsapp  = () =>
{
    return (
    <div  style={{ position:"fixed", bottom:"20px", right:"20px", display:"flex"}}>
                  <a href={`https://wa.me/393458552184?text=hi`}>
                        <Image
                            src={'/green-whatsapp.png'}
                            width={80}
                            height={80} alt={""}                        >
                        </Image>
                  </a>
    </div>
    )
}
export default Whatsapp;