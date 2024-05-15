function skillsMember() {
  const member = this;
  const { skills } = member;
  return skills.map(skill => skill.name);
}