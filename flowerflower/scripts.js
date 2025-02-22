function showFlower() {
    const month = document.getElementById('monthSelect').value;
    const flowerInfo = document.getElementById('flowerInfo');
    const flowerName = document.getElementById('flowerName');
    const flowerMeaning = document.getElementById('flowerMeaning');
    const flowerImage = document.getElementById('flowerImage');

    const flowers = {
        1: { 
            name: "Carnation", 
            meaning: "A symbol of love, fascination, and distinction.",
            image: "images/carnation.jpg"
        },
        2: { 
            name: "Violet", 
            meaning: "Symbolizes loyalty, humility, and faithfulness.",
            image: "images/violet.jpg"
        },
        3: { 
            name: "Daffodil", 
            meaning: "Represents rebirth, new beginnings, and prosperity.",
            image: "images/daffodil.jpg"
        },
        4: { 
            name: "Daisy", 
            meaning: "A symbol of purity, innocence, and cheerfulness.",
            image: "images/daisy.jpg"
        },
        5: { 
            name: "Lily of the Valley", 
            meaning: "Represents sweetness, humility, and a return to happiness.",
            image: "images/lily-of-the-valley.jpg"
        },
        6: { 
            name: "Rose", 
            meaning: "Represents love, passion, and beauty.",
            image: "images/rose.jpg"
        },
        7: { 
            name: "Larkspur", 
            meaning: "Symbolizes strong bonds and love.",
            image: "images/larkspur.jpg"
        },
        8: { 
            name: "Gladiolus", 
            meaning: "Represents strength of character, integrity, and sincerity.",
            image: "images/gladiolus.jpg"
        },
        9: { 
            name: "Aster", 
            meaning: "A symbol of elegance, patience, and wisdom.",
            image: "images/aster.jpg"
        },
        10: { 
            name: "Marigold", 
            meaning: "Represents passion, creativity, and positive energy.",
            image: "images/marigold.jpg"
        },
        11: { 
            name: "Chrysanthemum", 
            meaning: "Symbolizes optimism, joy, and longevity.",
            image: "images/chrysanthemum.jpg"
        },
        12: { 
            name: "Poinsettia", 
            meaning: "Represents good cheer, success, and celebration.",
            image: "images/poinsettia.jpg"
        }
    };

    if (month) {
        flowerName.textContent = flowers[month].name;
        flowerMeaning.textContent = flowers[month].meaning;
        flowerImage.src = flowers[month].image;
        flowerImage.style.display = 'block';
        flowerInfo.style.display = 'block';
    } else {
        flowerInfo.style.display = 'none';
    }
}
