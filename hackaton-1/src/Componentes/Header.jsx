import React from 'react';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');
</style>

function Header(){
    return(
        <header>
            <div>
                <img src= "https://thumbs2.imgbox.com/3f/d7/wVhdEa3x_t.png"  alt="Logo"/>
            </div>
            <nav>
                <ul>
                <button onClick={"Header"}>Datos</button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;