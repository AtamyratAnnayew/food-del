import logo from './Logo.svg'
import productTrash from './productTrash.svg'
import search from './Search.svg'
import headerImage from './MainImage.svg'
import plusButton from './plus-circle-thin.svg'
import minusButton from './minus-circle-thin.svg'
import addButton from './AddButton.svg'
import video from './Connect_IP.mp4'
import facebook from './Facebook.svg'
import twitter from './Twitter.svg'
import instagram from './Instagram.svg'
import comment from './Comment.svg'
import star from './Star.svg'
import cross from './crossIcon.png'


import eclair from './Eclair.svg'
import tort from './Tort.svg'
import iceCream from './Dondurma_IceCream.svg'
import croissant from './Croissant.svg'
import croissantWithFruit from './CroissantWithFruits.svg'

import iceAmericano from './IceAmericano.svg'
import iceLatte from './IceLatte.svg'
import afforgato from './Afforgato.svg'
import glace from './Glace.svg'
import iceTea from './IceTea.svg'
import classicMoxito from './ClassicMoxito.svg'
import berryMoxito from './BerryMoxito.svg'
import naturalJuiceVeg from './NaturalJuiceVeg.svg'
import naturalJuiceFruit from './NaturalJuiceFruit.svg'
import smoothieStrawberry from './SmoothieStrawberry.svg'
import smoothiePineapple from './SmoothiePineapple.svg'
import smoothieBanana from './SmoothieBanana.svg'
import coldDrink from './ColdDrink.svg'

import hotDog from './HotDog.svg'
import tost from './Tost.svg'
import classicSendwich from './ClassicSendwich.svg'
import beefSendwich from './BeefSendwich.svg'
import chickenSendwich from './ChickenSendwich.svg'
import croissantSendwich from './CroissantSendwich.svg'
import brownTommySendwich from './BrowntommySendwich.svg'



export const assets = {
    logo,
    productTrash,
    search,
    headerImage,
    plusButton,
    minusButton,
    addButton,
    facebook,
    twitter,
    instagram,
    comment,
    star,
    video,
    cross
}

export const menu_list =[
    {
        menu_name: "Hemmesi",
    },

    {
        menu_name: "Tostlar",
    },

    {
        menu_name: "Sendwichler",
    },

    {
        menu_name: "Ichgiler",
    },

    {
        menu_name: "Sowuk ichgiler",
    },

    {
        menu_name: "Tortlar",
    },

    {
        menu_name: "Dondurmalar",
    }
]


export const food_list = [
    {
        _id:  "1",
        name: "Hot Dog",
        image: hotDog,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Tostlar"
    },

    {
        _id: "2",
        name: "Tost",
        image: tost,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Tostlar"
    },

    {
        _id: "3",
        name: "Classic Sendwich",
        image: classicSendwich,
        price: 15,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Sendwichler"
    },

    {
        _id: "4",
        name: "Beef Sendwich",
        image: beefSendwich,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Sendwichler"    
    },

    {
        _id: "5",
        name: "Chicken Sendwich",
        image: chickenSendwich,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Sendwichler"  
    },

    {
        _id: "6",
        name: "Croissant Sendwich",
        image: croissantSendwich,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Sendwichler" 
    },

    {
        _id: "7",
        name: "Brown Tommy Sendwich",
        image: brownTommySendwich,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Sendwichler"
    },

    {
        _id: "8",
        name: "Eclair",
        image: eclair,
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Tortlar"
    },

    {
        _id: "9",
        name: "Tort",
        image: tort,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Tortlar"
    },

    {
        _id: "10",
        name: "Ice Cream",
        image: iceCream,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Dondurmalar"
    },

    {
        _id: "11",
        name: "Croissant",
        image: croissant,
        price: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Tortlar"
    },

    {
        _id: "12",
        name: "Croissant With Fruit",
        image: croissantWithFruit,
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Tortlar"
    },

    {
        _id: "13",
        name: "Natural Juice Fruit",
        image: naturalJuiceFruit,
        price: 15,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "14",
        name: "Smoothie Strawberry",
        image: smoothieStrawberry,
        price: 30,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "15",
        name: "Smoothie Pineapple",
        image: smoothiePineapple,
        price: 30,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "16",
        name: "Smoothie Banana",
        image: smoothieBanana,
        price: 30,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "17",
        name: "Sowuk Ichgiler",
        image: coldDrink,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Sowuk ichgiler"
    },

    {
        _id: "18",
        name: "Natural Juice Veg",
        image: naturalJuiceVeg,
        price: 15,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "19",
        name: "Berry Moxito",
        image: berryMoxito,
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "20",
        name: "Classic Moxito",
        image: classicMoxito,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "21",
        name: "Ice Tea",
        image: iceTea,
        price: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "22",
        name: "Glace",
        image: glace,
        price: 25,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "23",
        name: "Afforgato",
        image: afforgato,
        price: 20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "24",
        name: "Ice Latte",
        image: iceLatte,
        price: 15,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },

    {
        _id: "25",
        name: "Ice Americano",
        image: iceAmericano,
        price: 10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        category: "Ichgiler"
    },
]