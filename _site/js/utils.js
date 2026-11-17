export function makeTree(name, desc, water, light, soil, age){
    const dirt = ["Bone Dry", "Dry", "Moderate", "Moist", "Wet", "Saturated"]
    const lux = ["Low", "Medium", "Indirect Sunlight", "Direct Sunlight"]

    const infoTree = {
        name: name,
        desc: desc,
        water: water,
        light: lux[light],
        soil: dirt[soil],
        age: age
    }

    return infoTree;
}