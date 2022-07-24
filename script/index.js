function changeVisibleMenu() {
  const buttonMobile = document.getElementById('button__mobile')
  const navigation = document.getElementById('navigation')

  buttonMobile.classList.toggle('active')
  navigation.classList.toggle('active')
}