import { Card } from '@/components/card'
import Link from 'next/link'
import React from 'react'

const Unread = () => {
    return (
        <Card>Unread Notifications
            <h2>You have 1 unread notifications.</h2>
            <p>View all</p>
            <Link href={"/dashboard"}> Go Back</Link>

        </Card>
    )
}

export default Unread