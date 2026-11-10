import "./ArticleCard.css";
import ArticleLogo from "/assets/ArticleCard.png";


function ArticleCard(props) {
    return(
        <>
        <div class="articleBox">
            <div class="articleCard">
                <img src={props.image}/>
                <h1>{props.name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste natus quos saepe adipisci itaque, vel deserunt, molestiae laboriosam dicta, vitae laborum totam recusandae nihil. Praesentium exercitationem voluptatibus illo tempore ipsum!</p>
            </div>
            </div>
        </>
    )
}


export default ArticleCard;