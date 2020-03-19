import Vue from "vue";
import Router from "vue-router";

import home from "@/components/home"
import about from "@/components/about"
import contact from "@/components/contact"
import services from "@/components/services"
import post from  "@/components/post"


Vue.use(Router)
export const router =  new Router({
    mode: "hash", 
    routes: [ 
        {
            name: "home",
            path: '/',
            component: home
        },
        {
            name: "about",
            path: '/about',
            component: about,
        },
        {
            name: "contact",
            path: '/contact',
            component: contact,
        },
        {
            name: "services",
            path: '/services',
            component: services,
        }, 
        {
            name: "post",
            path: '/post',
            component: post,
        },   
        
    ]
})