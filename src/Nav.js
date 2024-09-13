
const Nav = ps => {
    const array = [
        {href: "/page1/1234", txt: "PAGE1"},
        {href: "/page2?txt=abcd", txt: "PAGE2"},
        {href: "/page3/짜짜", txt: "PAGE3"}
    ];
    
    return (
      <nav>
        {
            array.map(row => 
                <a href={row.href} key={row.txt}>{row.txt}</a>
            )
        }
      </nav>
    );
  }

  export default Nav;