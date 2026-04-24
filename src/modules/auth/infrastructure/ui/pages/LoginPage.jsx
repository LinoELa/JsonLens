// ======================= NOTES ==================================
/**
 * @PAGE LoginPage
 * Pantalla base de autenticacion para acceso al modulo protegido.
 *
 * - Define el entrypoint visual del flujo de login
 * - Reserva la zona para formulario y validaciones futuras
 */
// ======================= IMPORTS ==================================
import React from 'react'
import Placeholder from '../../../shared/infrastructure/ui/components/Placeholder'

// ======================= SETUP PRINCIPAL ==========================
export default function LoginPage(){
  // Vista temporal mientras se integra el formulario real.
  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <Placeholder>Formulario de login (implementación de ejemplo)</Placeholder>
    </div>
  )
}
