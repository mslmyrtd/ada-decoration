import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import { ILinks, IServices } from '../types/globaltypes.types'
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md/"
import { GrStatusInfo } from "react-icons/gr"
import { CgPlayListCheck } from "react-icons/cg"


export const links: ILinks[] = [
  {
    id: 1,
    text: 'home',
    url: '/',
    icon: <AiOutlineHome />
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
    icon: <GrStatusInfo />
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
    icon: <MdProductionQuantityLimits />
  },
]

export const services: IServices[] = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
