import { render, screen } from "@testing-library/react";
import UserCard from "../Card/UserCard";


test("render card", () => {

    render(
        <UserCard 
            name="Vishwas Raman"
            email="vishwas@sigalei.io"
            password='uw4DhXTnmzz8SJRX'
            phone='(555) 555-5555'
            avatar='https://storage.googleapis.com/challenge-sigalei/vishwas.png'
        />
    )
    const cardsInfo = screen.getByTestId("Card")
    expect(cardsInfo).toBeInTheDocument()
})