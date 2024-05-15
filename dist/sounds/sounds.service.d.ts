import { CreateSoundDto } from './dto/create-sound.dto';
import { UpdateSoundDto } from './dto/update-sound.dto';
export declare class SoundsService {
    create(createSoundDto: CreateSoundDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSoundDto: UpdateSoundDto): string;
    remove(id: number): string;
}
