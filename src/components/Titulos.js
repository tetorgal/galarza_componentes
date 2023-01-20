import styled from "styled-components";

function Titulos() {

    const Link = ({ className, children }) => (
        <a className={className}>
            {children}
        </a>
    );

    const StyledLink = styled(Link)`
        color: palevioletred;
        font-weight: bold;
      `;

    return (

        <div>
            <h1><StyledLink>Hola Mundo!</StyledLink></h1>
            <h2><Link>Mi nombre es Hector Galarza</Link></h2>
     
        </div>
    );
}
export default Titulos;