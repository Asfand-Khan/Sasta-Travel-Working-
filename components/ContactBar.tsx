import React from 'react'
import Container from './Container'
import { Facebook, Instagram } from 'lucide-react'

const ContactBar = () => {
  return (
    <div className="bg-[#2F9096] text-white py-2">
            <Container>
                <div className="flex justify-between items-center">
                    {/* Number & Email */}
                    <div className="flex gap-4 font-medium text-lg">
                        <p>02134140422</p>
                        <p>info@sastatravel.pk</p>
                    </div>
                    {/* Social Icons */}
                    <div className="flex gap-4 font-medium text-lg">
                        <Facebook size={20} className="cursor-pointer hover:scale-125 transition" />
                        <Instagram size={20} className="cursor-pointer hover:scale-125 transition" />
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default ContactBar