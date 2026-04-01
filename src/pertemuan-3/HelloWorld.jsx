export default function HelloWorld(){
    const cobaData = {
        nama : "RajaMuiz",
        nim : "2455301125",
        tanggal : "2003-9-19"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GretingBinjai/>
            <QuoteText/>
            <UserCard 
	            nama="Fikri" 
	            nim="169412"
	            tanggal={new Date().toLocaleDateString()}
	          />
              <UserCard{...cobaData}/>
        </div>
    )
}

function GretingBinjai(){
    return(
        <small>Salam dari binjai</small>
    )
}
function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}
function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>

            <img src="img/raja.png
            " alt="logo" width="200" height="200"/>
        </div>
    )
}