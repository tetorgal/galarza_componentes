import styled from "styled-components";

function Botonsitos() {
    const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background: ; // <Thing> when hovered
  }
  
`;

    return(

        <div>
<a href="https://www.github.com/tetorgal" target={"_blank"} rel="noreferrer"><Button>Mi GitHub</Button></a> 
<a href="https://utd.edu.mx" target={"_blank"} rel="noreferrer" ><Button primary>Página UTD</Button></a> 
<a href="https://www.facebook.com/hector.galarza.18" target={"_blank"} rel="noreferrer" ><Button >margin Facebook</Button></a> 


  </div>
    );
}
export default Botonsitos;