export var infoTree = function printTree(name, desc, water, light, soil, age){
    this.name = name;
    this.desc = desc;
    this.water = water;
    this.light = lux[light];
    this.soil = dirt[soil];
    this.age = Number(age);

    const dirt = ["Bone Dry", "Dry", "Moderate", "Moist", "Wet", "Saturated"]
    const lux = ["Low", "Medium", "Indirect Sunlight", "Direct Sunlight"]
}