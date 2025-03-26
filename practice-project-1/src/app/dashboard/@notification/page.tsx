// Example of parallel routes
import { Card } from '@/components/card'
import Link from 'next/link'
import React from 'react'


const Notification = () => {
    return (
        <Card>Notification
            <div>
                <ul>
                    <li><Link href="/dashboard/unread">Unread Notifications</Link></li>
                    <li><Link href="/dashboard/stared">Stared Notifications</Link></li>
                </ul>
            </div>
        </Card>
    )
}

export default Notification