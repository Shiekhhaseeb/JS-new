// // const rootNode = document.getRootNode();
// // console.log(rootNode);// tells root node  kon hai?
// //To check its child we have got the Method:-->
// // console.log(rootNode.childNodes);
// // const htmlElementNode =rootNode.childNodes[0]
// // console.log(rootNode.childNodes[0]);

// /************* */
// const rootNode = document.getRootNode();
// const htmlElementNode =rootNode.childNodes[0]
// // console.log(htmlElementNode);
// // console.dir(htmlElementNode);
// ///if we want html child :-->
// // console.log(htmlElementNode.childNodes);//NodeList(4) [script#allow-copy_script, head, text, body]
// const headElementNode= htmlElementNode.childNodes[0];
// const textNode1 =htmlElementNode.childNodes[1]
// const bodyElementNode =htmlElementNode.childNodes[2]
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);
// //Root node se kahi bhi traverse karsakhtay hai

// //check head ka parent:-->
// // console.log(headElementNode.parentNode);//html ,print hoga

// //sibling relationship:-->//head ka next sibling kon hai:-
// console.log(headElementNode.nextSibling);

// //check its content:-->
// console.log(headElementNode.nextSibling);//#text
// //ignores spaces :-->
// console.log(headElementNode.nextElementSibling);
// //check child nodes of head/text:-->
// console.log(textNode1.childNodes);
// console.log(headElementNode.childNodes);
// // console.log(typeof headElementNode);
// // console.log(typeof textNode1);
// // console.log(typeof bodyElementNode);
/************************ */
//h1 ko select karo or iske parent tak jana hai or parent ka textcolor, color change karo
const h1 = document.querySelector("h1")
// console.log(h1.parentNode);
// const h1sParent = h1.parentNode
//child se parent tak pohunc gaye
const div = h1.parentNode
div.style.color ="#efefef"
div.style.backgroundColor ="#333"