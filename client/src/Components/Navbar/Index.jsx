import React from 'react'
import { Link } from 'react-router-dom'
import "./Index.scss"


function Index({wishList, setWishList}) {
  return (
    <header>
        <nav>
            <div className='left'>
                <img  src="data:image/png;base64,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" alt="" />
                
            </div>
            <div className='mid'>
                <ul>
                    <li>
                        <Link to={'/'} className='link'>HOME</Link>
                        
                    </li>
                    <li>
                    <Link to={'/AddPage'} className='link'>ADD  PAGE</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/wishList'}>
                        WISH LIST <span>
                        {wishList.length}</span> 
                        </Link>
                        
                    </li>
                    <li className='link'>
                       BLOG
                    </li>
                
                    <li className='link' >
                        CONTACT
                    </li>
                </ul>
                <ul className='icons'>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                </ul>
            </div>
          
            <div className='right'>
               
                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABVCAYAAADXN8NkAAAAAXNSR0IArs4c6QAABbdJREFUeF7tnD1wDVEUx09KGiEtg4YyT0kjRhuDQlo0DI2Ezsd4RuhINIxKtBRikjaTaCi9lDQYWl8NZcz/bZaXfffsnnP33t19cc7MzjOcvffub88959xz7xpaO0drZBKMwJABDcay25ABDcvTgAbmaUANaGgCgdszH2pAAxMI3JxZqAENTCBwc2ahBjQwgcDNmYVuaqBbh4l2jhLtahFtGU5+8Xcje5Lr68fk+vWD6HOH6Pf67/tXgbH4N1e/hQLY6HGi1onk8pXOPBGu1ZcJ8JqkPqAHT5eHyEFL4b55WjnW6oEC5LF2MoVjC9zDQpuoQrDVAd03RnTsJhF+q5b3K0QLt4jwG1niA4WPvPCiHpBZeAD66GRUHxsXKKL05eUkUksFQeXdShLFIV86GwF0M4FW8m9of/9YEtSkgoB1/8i/9qX3CfXiAT10hujUTDHM3z+T6JxewoH3qaVZAn63bMtvBVCfTxG9nvPtjb0vDtCJGaKjk/mDBcil2eQKmebAgtE3riKw6PvZVFCo4YGefkIE68yTxVvhQWb7S8GO38wfC6z06dlgUMMCnZglOnqJH9yXVaKHJ5LVTlWC9OzifLIC42TpAdGzghklHG84oLBKWCcnyAUx6JDTW/iQ3aCIl40cmBNYaQCfGgYoou31t/xgMcWRYNctWFDkuYDpA6Wjf3mgePt3PvDRPNCbD/Yu8mYSZs+1vaVmUXmgV5b5pB0RFJG0aZJnqUj+7x3xHnE5oFhGAqhL4DPnCqK997AD3HhmjvepAOq5TC0HFH4T/jMriOb3xkpNnQDI8puAq7qy4o7+WKXBn3qIP1DOFyFhv92qNjXyePDuLUip7n5w3+3p+/2BYiCuElxTIroUMudPkStf3Stt5a+eH1As67C8zAqs8+qeZk/17Jgx9e9+dC9TPYKqH1DOdw6adaZwOSv18KV6oJzf+fqJaLo1WNaZAoWVXu8Qjezun3VT21XPpAfKBaOmp0lF3pBLo5TBSQ8UhQZXQReVcNQ0B1VQR8XOQlZQ8EZBRyg6oJgaM9/dwWhSUZUXDq5ytdkf7uCkmPY6oNzKSPkWKwcl7ZCbfYqVkw4oFw2Vfkb6fJXrcemgInsJA1TxBiuHpOmQm4HRgGLtu+9w/xA3O1CFS9NZKAdU4bQ1BlO5Lhd0cRgNxR6B6IAiwrv22M8PCboaEJXHji81UXiG0QhEB9TVGTqRAEWZb8fu/nIfplN6qEEw4EIV9JPNk9H+t0+yfso8o/rTRJ/O8IDYvHPVTVM6obZyi7awARYZSd4L9HnGnrcc10KxIYZUSyJlAxu30nH1jQ1DRG6XNBYol9NxcBWpibOJoh3N7E1c7txIoKhIocSnOSRWFii3yuFeIAINtjmyhy4aCTRvAyyWhXIpXZ67cVXIGgmUK0DnPVxZC/UB6iogNxIoN6imAXWlfI0DmrdX30Sg2eM3BnT9LflMedyaTdcMqAF1T/w6gpJZaI4TtimfgfNfWihOWGT3rnEwDGeZUhm0KJ8NSjc6/QfIcOYAJ2IEoiuOYH2ONXP6dQWO3uCYd+9R6kEHinMHOD7e+4wopgjPueqA9loh/uw6Q8lVvYvebl1TntttSD+hVJ4T9QNaBMflGoruqQOoYioXDT/99zhAfSJuHUAVe0X1AtUUe9OR1gE0wvGhOBYKSNr6ZFmg2gKzYmtYap3Qiwc074iga4Qeh1s3NKPZIYh49DIeUDwtoI638z9XhF6IB5S+QHyGuNhWnflshoX2jgIpCL5rx2/3f7xZ//waILv/20I7zEcO2HrB1Ec/6QIEuTIKybhw3FKZBmlgxp3y2pFsEv24U36TQNI8hgHV0BLoGlABJI2KAdXQEugaUAEkjYoB1dAS6BpQASSNigHV0BLoGlABJI2KAdXQEugaUAEkjYoB1dAS6BpQASSNigHV0BLoGlABJI2KAdXQEuj+ARxVBbdi45v9AAAAAElFTkSuQmCC" alt="" />
                <span>10 (87) 237 3784</span>
            </div>
        </nav>
    </header>
  )
}

export default Index