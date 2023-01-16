import { useEffect, useRef } from 'react'
import { ITrashProps } from '../../../shared/interface'
import { trash } from './TrashUI.module.css'


export function TrashUI({ onTrashZone }: ITrashProps) {
    const trashRef = useRef<HTMLDivElement>(null)
    
    function handleMouseEnter() {
        trashRef.current!.style.borderStyle = 'dashed'
    }
    
    function handleMouseLeave() {
        trashRef.current!.style.borderStyle = 'solid'
    }
    
    const options = {
        root: trashRef.current,
        rootMargin: '0px',
        threshold: 1.0
    }

    useEffect(() => {
      const observer = new IntersectionObserver(function(entries) {
        const [entry] = entries
        
        onTrashZone(entry.isIntersecting)
      }, options)

      if (trashRef.current) {
        observer.observe(trashRef.current)
      }
    
      return () => {
        observer.unobserve(trashRef.current!)
      }
    }, [trashRef, options])
    

    return (
        <div data-testid="trash-ui" className={trash} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={trashRef}>
            <small>Drop here to remove note</small>
        </div>
    )
}