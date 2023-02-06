import React, { useEffect, useState, useLayoutEffect } from 'react';

import {
    Alert,
    Input,
    Spin,
    PageHeader,
    Image
} from 'antd';

function NavBar() {
    const [movieName, setName] = useState([])
    const [search, setSearch] = useState('narnia')
    var loader = false


    useLayoutEffect(() => { getMovies() }, [])

    const getMovies = async () => {
        loader = true
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '523bc95b0amshad249f6534fec44p1392a8jsne8b58f847092',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };

        await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${search}`, options)
            .then(response => (response.json()))
            .then(response => {
                console.log(".", response.d[0].i);
                if (response != '') {
                    setName(response.d)
                    movieName.map((item, index) => {
                        console.log(".", item);
                    })
                    loader = false
                }
                else {
                    loader = false,
                        <Alert message="Error" type="error" showIcon />
                }
            })
            .catch(err => console.error(err)
            );
    }



    function NumberList() {
        // movieName.map((item, index) => {
        //     const list = item.id;
        // })
        const listItems = movieName.map((item, index) =>

        (<>
        {("i" in item ) ==true?<Image
                width={200}
                src={item.i.imageUrl}
                style={{marginLeft:'20pc'  }}
            />:<Image
            width={200}
            src={'https://www.feednavigator.com/var/wrbm_gb_food_pharma/storage/images/9/2/8/5/235829-6-eng-GB/Feed-Test-SIC-Feed-20142.jpg'}
            style={{marginLeft:'20pc'  }}
        />}
            
            <p style={{ color: '#fff',marginLeft:'20pc'  }} key={index}>{item.l}</p>
        </>)
        );
        return (
            <div style={{width: '100pc', backgroundColor: '#6882ab', border:'2px solid #fff'}}>{listItems}</div>
        );
    }
    return (
        <div style={{ backgroundColor: '#fff', position: 'absolute', top: 2, left: 2, width: '100pc' }} >
            <h1 style={{ color: 'red' }}> Movies</h1>
            <input type='text' placeholder="Search Movies" onChange={(e) => setSearch(e.target.value)} style={{ height: '25px' }} />
            <button onClick={getMovies} style={{ height: '40px', backgroundColor: 'grey', marginLeft: 20 }} >Search</button>

            {loader == true ? <Spin /> : NumberList()}
        </div>
    )
}


export default NavBar;
