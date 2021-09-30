let yourName = "Gael Zarco"

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

document.getElementById('credit').textContent = `Created by ${yourName}`

//Total
let totalVoteCell = document.querySelector('#qty-total')

// Ginger Cookies
let gbVoteCell = document.querySelector('#qty-gb')

document.getElementById('add-gb').addEventListener('click', function() {
    let gbCount = parseInt(gbVoteCell.textContent)
    gbCount = gbCount + 1
    gbVoteCell.textContent = gbCount
    let totalCount = parseInt(totalVoteCell.textContent)
    totalCount = totalCount + 1
    totalVoteCell.textContent = totalCount
})

document.getElementById('minus-gb').addEventListener('click', function() {
    let gbCount = parseInt(gbVoteCell.textContent)
    gbCount = gbCount - 1
    if (gbCount < 0){
        gbCount = 0
    }
    gbVoteCell.textContent = gbCount
    let totalCount = parseInt(totalVoteCell.textContent)
    if (gbCount >= 0){
        totalCount = totalCount - 1
    }
    if (totalCount < 0){
        totalCount = 0
    }
    totalVoteCell.textContent = totalCount
})

// Choco Cookies
let ccVoteCell = document.querySelector('#qty-cc')

document.getElementById('add-cc').addEventListener('click', function() {
    let ccCount = parseInt(ccVoteCell.textContent)
    ccCount = ccCount + 1
    ccVoteCell.textContent = ccCount
    let totalCount = parseInt(totalVoteCell.textContent)
    totalCount = totalCount + 1
    totalVoteCell.textContent = totalCount
})

document.getElementById('minus-cc').addEventListener('click', function() {
    let ccCount = parseInt(ccVoteCell.textContent)
    ccCount = ccCount - 1
    if (ccCount <= 0){
        ccCount = 0
    }
    ccVoteCell.textContent = ccCount
    let totalCount = parseInt(totalVoteCell.textContent)
    if (ccCount >= 0){
        totalCount = totalCount - 1
    }
    if (totalCount < 0){
        totalCount = 0
    }
    totalVoteCell.textContent = totalCount
})

// Sugar Cookies
let sugarVoteCell = document.querySelector('#qty-sugar')

document.getElementById('add-sugar').addEventListener('click', function() {
    let sugarCount = parseInt(sugarVoteCell.textContent)
    sugarCount = sugarCount + 1
    sugarVoteCell.textContent = sugarCount
    let totalCount = parseInt(totalVoteCell.textContent)
    totalCount = totalCount + 1
    totalVoteCell.textContent = totalCount
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    let sugarCount = parseInt(sugarVoteCell.textContent)
    sugarCount = sugarCount - 1
    if (sugarCount < 0){
        sugarCount = 0
    }
    sugarVoteCell.textContent = sugarCount
    let totalCount = parseInt(totalVoteCell.textContent)
    if (sugarCount >= 0){
        totalCount = totalCount - 1
    }
    if (totalCount < 0){
        totalCount = 0
    }
    totalVoteCell.textContent = totalCount
})