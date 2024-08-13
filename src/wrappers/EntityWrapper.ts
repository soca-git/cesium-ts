import { Entity, Viewer } from "cesium";

export abstract class EntityWrapper
{
    private readonly dependencies: { viewer: Viewer; };
    protected readonly entity: Entity;

    constructor(dependencies: { viewer: Viewer }, entity: Entity)
    {
        this.dependencies = dependencies;
        this.entity = entity;
    }

    public draw(): void
    {
        this.dependencies.viewer.entities.add(this.entity);
    }
}
