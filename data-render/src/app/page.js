'use client'
import { useEffect, useState } from 'react'
import SearchDropdown from '@/Components/Dropdown';

const options = ['Ethereum', 'Dogecoin', 'Solana'];

export default function Home() {

  return (
    <main >
      <h1>Welcome to Graphs</h1>
      <h1>Search Dropdown Example</h1>
      <SearchDropdown options={options} />
    </main>
  )
}
