function skillMember(skills) {
    let skill = skills.split(',')
    let result = []
    for (let i = 0; i < skill.length; i++) {
        let temp = []
        temp.push(skill[i])
        temp.push(skill.length - i)
        result.push(temp)
    }
    return result
}