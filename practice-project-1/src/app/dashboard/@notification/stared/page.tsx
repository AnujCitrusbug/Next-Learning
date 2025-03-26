import { Card } from '@/components/card'
import Link from 'next/link'
import React from 'react'

const Stared = () => {
    return (
        <Card>Stared Notifications
            <h2>You have 3 starred notifications.</h2>
            <p>View all</p>
            <Link href={"/dashboard"}> Go Back</Link>
        </Card>
    )
}

export default Stared