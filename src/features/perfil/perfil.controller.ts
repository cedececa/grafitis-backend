import { Controller, Inject } from '@nestjs/common'
import { PerfilEntity } from 'src/entities/perfil.entity'
import { PerfilService } from 'src/services/perfil/perfil.service'
import { CommonController } from '../common.controller'

const name = 'Perfil'
@Controller(name)
export class PerfilController extends CommonController<
  PerfilEntity,
  PerfilService
> {
  constructor(@Inject(PerfilService) private perfilService: PerfilService) {
    super(perfilService, name)
  }
}
