import "./Works.css"
import Card from "../../components/Card"
import darb_img from "../../assets/works_photos/darb.png"
const WORKS = [
    {
        image: darb_img,
        title:"متصفح درب",
        link:"https://github.com/0xangoone/DARB-browser"
    }
]
export default function Works(){
    const works = WORKS.map((dev, key) => (
        <Card {...dev} />
      ))
    return (
        <div class="body">  
            <div className="card_container">
                {works}
            </div>
        </div>
    )
}
