exports.sum = (a,b) => {
    return {x: a.x + b.x, y : a.y + b.y};
}

exports.sub = (a,b) => {
    return {x: a.x - b.x, y : a.y - b.y};
}

exports.escalar = (v1,magnitud) => {
    return {x: v1.x * magnitud, y: v1.y * magnitud};
}

exports.dot = (v1,v2) => {
    return (v1.x * v2.x + v1.y * v2.y);
}