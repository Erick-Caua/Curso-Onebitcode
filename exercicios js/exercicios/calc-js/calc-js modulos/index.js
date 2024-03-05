import copy from "./modulos/copy.js"
import { darkLight } from "./modulos/dark-light.js"
import { clear } from "./modulos/clear.js"
import calculate from "./modulos/erro.js"
import d from "./modulos/btn.js"
import { veri } from "./modulos/verificacao.js"



document.querySelectorAll(".charKey").forEach(d)

document.getElementById("clear").addEventListener("click",clear)

input.addEventListener("keydown",veri)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copy)

document.getElementById("themeSwitcher").addEventListener("click",darkLight)